import { Injectable } from '@angular/core';
import * as Forge from 'node-forge';

@Injectable({
  providedIn: 'root',
})
export class RSAHelper {
  publicKey: string = `-----BEGIN PUBLIC KEY-----
  MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgH07uKhNYKTFN09+dc9AwFlUci9M
  eM5Px5P8/o2I5900GQEWNVQV8FLB6RvkztQ7UpB59a7bqwq/AG7WGH2PcbQ94EbR
  ve8WwdIxqZoZ3KGY29BkTbu0/U7kp5LQbmAjf/z2lafKpeDXhAyz/FSkggj7RiZH
  twRhibczoCaSMDk5AgMBAAE=
  -----END PUBLIC KEY-----`;

  constructor() {}

  encryptWithPublicKey(valueToEncrypt: string): string {
    const rsa = Forge.pki.publicKeyFromPem(this.publicKey);
    return window.btoa(rsa.encrypt(valueToEncrypt.toString()));
  }
}