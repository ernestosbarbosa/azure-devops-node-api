import ifm = require('../interfaces/common/VsoBaseInterfaces');
import * as resthandlers from 'typed-rest-client/_build/Handlers';
export declare class BearerCredentialHandler extends resthandlers.BearerCredentialHandler implements ifm.IRequestHandler {
    constructor(token: string);
}
