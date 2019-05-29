/**
 * Forge SDK
 * The Forge Platform contains an expanding collection of web service components that can be used with Autodesk cloud-based products or your own technologies. Take advantage of Autodesk’s expertise in design and engineering.
 *
 * OpenAPI spec version: 0.1.0
 * Contact: forge.help@autodesk.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = (function() {
   'use strict';

   var ApiClient = require('../ApiClient'),
       AppPackage = require('../model/AppPackage'),
       AppPackageOptional = require('../model/AppPackageOptional'),
       AppPackageVersion = require('../model/AppPackageVersion'),
       DesignAutomationAppPackages = require('../model/DesignAutomationAppPackages');

  /**
   * AppPackages service.
   * @module api/AppPackagesApi
   */

  /**
   * Constructs a new AppPackagesApi.
   * @alias module:api/AppPackagesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

    /**
     * Creates an AppPackage module.
     * @param {module:model/AppPackage} appPackage
     * data is of type: {module:model/AppPackage}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.createAppPackage = function(appPackage, oauth2client, credentials) {
      var postBody = appPackage;

      // verify the required parameter 'appPackage' is set
      if (appPackage == undefined || appPackage == null) {
        return Promise.reject("Missing the required parameter 'appPackage' when calling createAppPackage");
      }

      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = AppPackage;

      return this.apiClient.callApi(
        '/autocad.io/us-east/v2/AppPackages', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };

    /**
     * Removes a specific AppPackage.
     * @param {String} id
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.deleteAppPackage = function(id, oauth2client, credentials) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        return Promise.reject("Missing the required parameter 'id' when calling deleteAppPackage");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/autocad.io/us-east/v2/AppPackages(%27{id}%27)', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };

    /**
     * Removes the version history of the specified AppPackage.
     * @param {String} id
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.deleteAppPackageHistory = function(id, oauth2client, credentials) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        return Promise.reject("Missing the required parameter 'id' when calling deleteAppPackageHistory");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/autocad.io/us-east/v2/AppPackages(%27{id}%27)/Operations.DeleteHistory', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };

    /**
     * Returns the details of all AppPackages.
     * data is of type: {module:model/DesignAutomationAppPackages}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.getAllAppPackages = function(oauth2client, credentials) {
      var postBody = null;

      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = DesignAutomationAppPackages;

      return this.apiClient.callApi(
        '/autocad.io/us-east/v2/AppPackages', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };

    /**
     * Returns the details of a specific AppPackage.
     * @param {String} id
     * data is of type: {module:model/AppPackage}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.getAppPackage = function(id, oauth2client, credentials) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        return Promise.reject("Missing the required parameter 'id' when calling getAppPackage");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = AppPackage;

      return this.apiClient.callApi(
        '/autocad.io/us-east/v2/AppPackages(%27{id}%27)', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };

    /**
     * Returns all old versions of a specified AppPackage.
     * @param {String} id
     * data is of type: {module:model/DesignAutomationAppPackages}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.getAppPackageVersions = function(id, oauth2client, credentials) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        return Promise.reject("Missing the required parameter 'id' when calling getAppPackageVersions");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = DesignAutomationAppPackages;

      return this.apiClient.callApi(
        '/autocad.io/us-east/v2/AppPackages(%27{id}%27)/Operations.GetVersions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };

    /**
     * Requests a pre-signed URL for uploading a zip file that contains the binaries for this AppPackage.
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.getUploadUrl = function(oauth2client, credentials) {
      var postBody = null;

      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/autocad.io/us-east/v2/AppPackages/Operations.GetUploadUrl', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };

    /**
     * Requests a pre-signed URL for uploading a zip file that contains the binaries for this AppPackage. Unlike the GetUploadUrl method that takes no parameters, this method allows the client to request that the pre-signed URL to be issued so that the subsequent HTTP PUT operation will require Content-Type&#x3D;binary/octet-stream.
     * @param {Boolean} require
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.getUploadUrlWithRequireContentType = function(require, oauth2client, credentials) {
      var postBody = null;

      // verify the required parameter 'require' is set
      if (require == undefined || require == null) {
        return Promise.reject("Missing the required parameter 'require' when calling getUploadUrlWithRequireContentType");
      }

      var pathParams = {
        'require': require
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/autocad.io/us-east/v2/AppPackages/Operations.GetUploadUrl(RequireContentType={require})', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };

    /**
     * Updates an AppPackage by specifying only the changed attributes.
     * @param {String} id
     * @param {module:model/AppPackageOptional} appPackage
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.patchAppPackage = function(id, appPackage, oauth2client, credentials) {
      var postBody = appPackage;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        return Promise.reject("Missing the required parameter 'id' when calling patchAppPackage");
      }

      // verify the required parameter 'appPackage' is set
      if (appPackage == undefined || appPackage == null) {
        return Promise.reject("Missing the required parameter 'appPackage' when calling patchAppPackage");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/autocad.io/us-east/v2/AppPackages(%27{id}%27)', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };

    /**
     * Sets the AppPackage to the specified version.
     * @param {String} id
     * @param {module:model/AppPackageVersion} appPackageVersion
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.setAppPackageVersion = function(id, appPackageVersion, oauth2client, credentials) {
      var postBody = appPackageVersion;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        return Promise.reject("Missing the required parameter 'id' when calling setAppPackageVersion");
      }

      // verify the required parameter 'appPackageVersion' is set
      if (appPackageVersion == undefined || appPackageVersion == null) {
        return Promise.reject("Missing the required parameter 'appPackageVersion' when calling setAppPackageVersion");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/autocad.io/us-east/v2/AppPackages(%27{id}%27)/Operations.SetVersion', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };

    /**
     * Updates an AppPackage by redefining the entire Activity object.
     * @param {String} id
     * @param {module:model/AppPackage} appPackage
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.updateAppPackage = function(id, appPackage, oauth2client, credentials) {
      var postBody = appPackage;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        return Promise.reject("Missing the required parameter 'id' when calling updateAppPackage");
      }

      // verify the required parameter 'appPackage' is set
      if (appPackage == undefined || appPackage == null) {
        return Promise.reject("Missing the required parameter 'appPackage' when calling updateAppPackage");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/autocad.io/us-east/v2/AppPackages(%27{id}%27)', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };
  };

  return exports;
}());