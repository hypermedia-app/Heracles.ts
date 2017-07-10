[hydraclient.js](../index.md) > ["src/HydraClient"](../modules/_src_hydraclient_.md) > [HydraClient](../classes/_src_hydraclient_.hydraclient.md)



# Class: HydraClient

**class**: HydraClient Heracles is a generic client for Hydra-powered Web APIs.
                   To learn more about Hydra please refer to {@link https://www.hydra-cg.com/spec/latest/core/}

## Index

### Properties

* [_hypermediaProcessors](_src_hydraclient_.hydraclient.md#_hypermediaprocessors)
* [apiDocumentationNotProvided](_src_hydraclient_.hydraclient.md#apidocumentationnotprovided)
* [invalidResponse](_src_hydraclient_.hydraclient.md#invalidresponse)
* [noEntryPointDefined](_src_hydraclient_.hydraclient.md#noentrypointdefined)
* [noHypermediaProcessor](_src_hydraclient_.hydraclient.md#nohypermediaprocessor)
* [noUrlProvided](_src_hydraclient_.hydraclient.md#nourlprovided)
* [responseFormatNotSupported](_src_hydraclient_.hydraclient.md#responseformatnotsupported)


### Methods

* [getApiDocumentation](_src_hydraclient_.hydraclient.md#getapidocumentation)
* [getApiDocumentationUrl](_src_hydraclient_.hydraclient.md#getapidocumentationurl)
* [getHypermediaProcessor](_src_hydraclient_.hydraclient.md#gethypermediaprocessor)
* [getResource](_src_hydraclient_.hydraclient.md#getresource)
* [convertToPropertyDescriptorMap](_src_hydraclient_.hydraclient.md#converttopropertydescriptormap)
* [getUrl](_src_hydraclient_.hydraclient.md#geturl)
* [registerHypermediaProcessor](_src_hydraclient_.hydraclient.md#registerhypermediaprocessor)



## Properties
<a id="_hypermediaprocessors"></a>

### «Static»«Private» _hypermediaProcessors

**_hypermediaProcessors**:  *[IHypermediaProcessor](../interfaces/_src_datamodel_ihypermediaprocessor_.ihypermediaprocessor.md)[]*  =  new Array<IHypermediaProcessor>()

*Defined in [src/HydraClient.ts:14](https://github.com/alien-mcl/Heracles.ts/blob/80e3949/src/HydraClient.ts#L14)*




___

<a id="apidocumentationnotprovided"></a>

### «Static» apiDocumentationNotProvided

**apiDocumentationNotProvided**:  *string*  = "API documentation not provided."

*Defined in [src/HydraClient.ts:17](https://github.com/alien-mcl/Heracles.ts/blob/80e3949/src/HydraClient.ts#L17)*




___

<a id="invalidresponse"></a>

### «Static» invalidResponse

**invalidResponse**:  *string*  = "Remote server responded with a status of "

*Defined in [src/HydraClient.ts:20](https://github.com/alien-mcl/Heracles.ts/blob/80e3949/src/HydraClient.ts#L20)*




___

<a id="noentrypointdefined"></a>

### «Static» noEntryPointDefined

**noEntryPointDefined**:  *string*  = "API documentation has no entry point defined."

*Defined in [src/HydraClient.ts:18](https://github.com/alien-mcl/Heracles.ts/blob/80e3949/src/HydraClient.ts#L18)*




___

<a id="nohypermediaprocessor"></a>

### «Static» noHypermediaProcessor

**noHypermediaProcessor**:  *string*  = "No hypermedia processor instance was provided for registration."

*Defined in [src/HydraClient.ts:19](https://github.com/alien-mcl/Heracles.ts/blob/80e3949/src/HydraClient.ts#L19)*




___

<a id="nourlprovided"></a>

### «Static» noUrlProvided

**noUrlProvided**:  *string*  = "There was no Url provided."

*Defined in [src/HydraClient.ts:16](https://github.com/alien-mcl/Heracles.ts/blob/80e3949/src/HydraClient.ts#L16)*




___

<a id="responseformatnotsupported"></a>

### «Static» responseFormatNotSupported

**responseFormatNotSupported**:  *string*  = "Response format is not supported."

*Defined in [src/HydraClient.ts:21](https://github.com/alien-mcl/Heracles.ts/blob/80e3949/src/HydraClient.ts#L21)*




___


## Methods
<a id="getapidocumentation"></a>

###  getApiDocumentation

► **getApiDocumentation**(url: *string*): Promise<[IApiDocumentation](../interfaces/_src_datamodel_iapidocumentation_.iapidocumentation.md)>

► **getApiDocumentation**(resource: *object*): Promise<[IApiDocumentation](../interfaces/_src_datamodel_iapidocumentation_.iapidocumentation.md)>



*Defined in [src/HydraClient.ts:53](https://github.com/alien-mcl/Heracles.ts/blob/80e3949/src/HydraClient.ts#L53)*

Obtains an API documentation.


**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| url  | string | - | URL from which to obtain an API documentation. |





**Returns:** Promise<[IApiDocumentation](../interfaces/_src_datamodel_iapidocumentation_.iapidocumentation.md)>





*Defined in [src/HydraClient.ts:59](https://github.com/alien-mcl/Heracles.ts/blob/80e3949/src/HydraClient.ts#L59)*

Obtains an API documentation.


**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| resource  | object | - | - |





**Returns:** Promise<[IApiDocumentation](../interfaces/_src_datamodel_iapidocumentation_.iapidocumentation.md)>







___

<a id="getapidocumentationurl"></a>

### «Private» getApiDocumentationUrl

► **getApiDocumentationUrl**(url: *string*): Promise<string>



*Defined in [src/HydraClient.ts:106](https://github.com/alien-mcl/Heracles.ts/blob/80e3949/src/HydraClient.ts#L106)*

**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| url  | string | - | - |





**Returns:** Promise<string>





___

<a id="gethypermediaprocessor"></a>

###  getHypermediaProcessor

► **getHypermediaProcessor**(response: *Response*): [IHypermediaProcessor](../interfaces/_src_datamodel_ihypermediaprocessor_.ihypermediaprocessor.md)



*Defined in [src/HydraClient.ts:42](https://github.com/alien-mcl/Heracles.ts/blob/80e3949/src/HydraClient.ts#L42)*

Gets a hypermedia provider suitable for a given response.


**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| response  | Response | - | Raw response to find hypermedia processor for. |





**Returns:** [IHypermediaProcessor](../interfaces/_src_datamodel_ihypermediaprocessor_.ihypermediaprocessor.md)







___

<a id="getresource"></a>

###  getResource

► **getResource**(url: *string*): Promise<[IWebResource](../interfaces/_src_datamodel_iwebresource_.iwebresource.md)>

► **getResource**(resource: *object*): Promise<[IWebResource](../interfaces/_src_datamodel_iwebresource_.iwebresource.md)>



*Defined in [src/HydraClient.ts:81](https://github.com/alien-mcl/Heracles.ts/blob/80e3949/src/HydraClient.ts#L81)*

Obtains a representation of a resource.


**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| url  | string | - | Url of the resource to be obtained. |





**Returns:** Promise<[IWebResource](../interfaces/_src_datamodel_iwebresource_.iwebresource.md)>





*Defined in [src/HydraClient.ts:87](https://github.com/alien-mcl/Heracles.ts/blob/80e3949/src/HydraClient.ts#L87)*

Obtains a representation of a resource.


**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| resource  | object | - | - |





**Returns:** Promise<[IWebResource](../interfaces/_src_datamodel_iwebresource_.iwebresource.md)>







___

<a id="converttopropertydescriptormap"></a>

### «Static»«Private» convertToPropertyDescriptorMap

► **convertToPropertyDescriptorMap**(instance: *any*): PropertyDescriptorMap



*Defined in [src/HydraClient.ts:140](https://github.com/alien-mcl/Heracles.ts/blob/80e3949/src/HydraClient.ts#L140)*

**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| instance  | any | - | - |





**Returns:** PropertyDescriptorMap





___

<a id="geturl"></a>

### «Static»«Private» getUrl

► **getUrl**(urlOrResource: *string⎮object*): string



*Defined in [src/HydraClient.ts:129](https://github.com/alien-mcl/Heracles.ts/blob/80e3949/src/HydraClient.ts#L129)*

**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| urlOrResource  | string⎮object | - | - |





**Returns:** string





___

<a id="registerhypermediaprocessor"></a>

### «Static» registerHypermediaProcessor

► **registerHypermediaProcessor**(hypermediaProcessor: *[IHypermediaProcessor](../interfaces/_src_datamodel_ihypermediaprocessor_.ihypermediaprocessor.md)*): void



*Defined in [src/HydraClient.ts:27](https://github.com/alien-mcl/Heracles.ts/blob/80e3949/src/HydraClient.ts#L27)*

Registers a hypermedia processor.


**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| hypermediaProcessor  | [IHypermediaProcessor](../interfaces/_src_datamodel_ihypermediaprocessor_.ihypermediaprocessor.md) | - | Hypermedia processor to be registered. |





**Returns:** void





___

