var http = require('http');
var url = require('url');
var ForgeSDK = require('./src/index');

var CLIENT_ID = '',
	CLIENT_SECRET = '',
	OBJECT_URN = '';

var bucketsApi = new ForgeSDK.BucketsApi(),
	objectsApi = new ForgeSDK.ObjectsApi(),
	derivativesApi = new ForgeSDK.DerivativesApi();

var oAuth2TwoLegged = new ForgeSDK.AuthClientTwoLegged(CLIENT_ID, CLIENT_SECRET, ['data:write', 'data:read', 'bucket:read','bucket:update','bucket:create'], true);

/**
 * General error handling method
 * @param err
 */
function defaultHandleError(err) {
	console.error('\x1b[31m Error:', err, '\x1b[0m' ) ;
}

function base64encode(str) {
  return new Buffer(str).toString('base64');
}

var server = http.createServer();
server.listen(process.env.PORT || 3000);
console.log("Server is listening");

server.on('request', function(req, res){
	oAuth2TwoLegged.authenticate().then(function(credentials){
		var token = credentials['access_token'];

		var parseUrl = url.parse(req.url, true);
		var model = parseUrl.query.model;

		var encodedURN = base64encode(OBJECT_URN);

		res.writeHead(200, {'Content-Type': 'text/html'});
		var data = [
	      '<head>',
	      '  <meta name="viewport" content="width=device-width, minimum-scale=1.0, initial-scale=1, user-scalable=no" />',
	      '  <meta charset="utf-8">',
	      '',
	      ' <!-- The Viewer CSS -->',
	      ' <link rel="stylesheet" href="https://developer.api.autodesk.com/modelderivative/v2/viewers/5.*/style.min.css" type="text/css">',
	      '',
	      '  <!-- Developer CSS -->',
	      '  <style>',
	      '    body {',
	      '      margin: 0;',
	      '    }',
	      '    #MyViewerDiv {',
	      '      width: 100%;',
	      '      height: 100%;',
	      '      margin: 0;',
	      '      background-color: #F0F8FF;',
	      '    }',
	      '  </style>',
	      '</head>',
	      '<body>',
	      '',
	      '  <!-- The Viewer will be instantiated here -->',
	      '  <div id="MyViewerDiv"></div>',
	      '',
	      '  <!-- The Viewer JS -->',
	      '  <script src="https://developer.api.autodesk.com/modelderivative/v2/viewers/5.*/viewer3D.min.js"></script>',
	      '',
	      '  <!-- Developer JS -->',
	      '  <script>',
	      "    var token = '" + token + "';",
	      "    var urn = '" + encodedURN + "';",
	      '',
	      '    var viewerApp;',
	      '    var options = {',
	      "      env: 'AutodeskProduction',",
	      '      getAccessToken: function(onGetAccessToken) {',
	      '        //',
	      '        // TODO: Replace static access token string below with call to fetch new token from your backend',
	      "        // Both values are provided by Forge's Authentication (OAuth) API.",
	      '        //',
	      "        // Example Forge's Authentication (OAuth) API return value:",
	      '        // {',
	      '        // "access_token": "<YOUR_APPLICATION_TOKEN>",',
	      '        // "token_type": "Bearer",',
	      '        // "expires_in": 86400',
	      '        // }',
	      '        //',
	      '        var accessToken = token;',
	      '          var expireTimeSeconds = 60 * 30;',
	      '          onGetAccessToken(accessToken, expireTimeSeconds);',
	      '        }',
	      '',
	      '    };',
	      '',
	      "    var documentId = 'urn:' + urn;",
	      '    Autodesk.Viewing.Initializer(options, function onInitialized(){',
	      '      var avp = Autodesk.Viewing.Private;',
	      '      avp.logger.setLevel( avp.LogLevels.Debug );',
	      '      var config3d = {',
	      "        extensions: ['Autodesk.Viewing.WebVR', 'Autodesk.Viewing.Collaboration']",
	      '      };',
	      "      viewerApp = new Autodesk.Viewing.ViewingApplication('MyViewerDiv');",
	      '      viewerApp.registerViewer(viewerApp.k3D, Autodesk.Viewing.Private.GuiViewer3D, config3d);',
	      '      viewerApp.loadDocument(documentId, onDocumentLoadSuccess, onDocumentLoadFailure);',
	      '    });',
	      '',
	      '    function onDocumentLoadSuccess(doc) {',
	      '',
	      '      // We could still make use of Document.getSubItemsWithProperties()',
	      '      // However, when using a ViewingApplication, we have access to the **bubble** attribute,',
	      '      // which references the root node of a graph that wraps each object from the Manifest JSON.',
	      "      var viewables = viewerApp.bubble.search({'type':'geometry'});",
	      '      if (viewables.length === 0) {',
	      "        console.error('Document contains no viewables.');",
	      '        return;',
	      '      }',
	      '',
	      '      // Choose any of the avialble viewables',
	      '      viewerApp.selectItem(viewables[0].data, onItemLoadSuccess, onItemLoadFail);',
	      '    }',
	      '',
	      '    function onDocumentLoadFailure(viewerErrorCode) {',
	      "      console.error('onDocumentLoadFailure() - errorCode:' + viewerErrorCode);",
	      '    }',
	      '',
	      '    function onItemLoadSuccess(viewer, item) {',
	      "      console.log('onItemLoadSuccess()!');",
	      '      console.log(viewer);',
	      '      console.log(item);',
	      '',
	      '      // Congratulations! The viewer is now ready to be used.',
	      "      console.log('Viewers are equal: ' + (viewer === viewerApp.getCurrentViewer()));",
	      '    }',
	      '',
	      '    function onItemLoadFail(errorCode) {',
	      "      console.error('onItemLoadFail() - errorCode:' + errorCode);",
	      '    }',
	      '',
	      '  </script>',
	      '</body>',
		].join('\n');
		res.write(data);
		res.end();
	});
});

