import crypto from 'crypto';

// Generate an ECDSA key pair using the P-256 curve
const generateWebAuthnKeyPair = () => {
  const keyPair = crypto.generateKeyPairSync('ec', {
    namedCurve: 'P-256', // Curve for WebAuthn (also called secp256r1)
    publicKeyEncoding: {
      type: 'spki', // WebAuthn requires SubjectPublicKeyInfo (SPKI) format
      format: 'pem', // PEM encoding
    },
    privateKeyEncoding: {
      type: 'pkcs8', // PKCS #8 format for private key
      format: 'pem', // PEM encoding
    },
  });

  console.log('Public Key:', keyPair.publicKey);
  console.log('Private Key:', keyPair.privateKey);

  return keyPair;
};

generateWebAuthnKeyPair();
