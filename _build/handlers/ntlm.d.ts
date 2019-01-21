import ifm = require('../interfaces/common/VsoBaseInterfaces');
import * as resthandlers from 'typed-rest-client/_build/Handlers';
export declare class NtlmCredentialHandler extends resthandlers.NtlmCredentialHandler implements ifm.IRequestHandler {
    constructor(username: string, password: string, workstation?: string, domain?: string);
}
