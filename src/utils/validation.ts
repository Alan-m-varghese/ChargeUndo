// src/utils/validation.ts
// Email, Phone, and Password validation helpers for CHARGE undo

/**
 * Validates whether an email address has a realistic format with valid domain and TLD.
 * Blocks synthetic, placeholder, and throwaway domain patterns.
 */
export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  const clean = email.trim().toLowerCase();

  // RFC 5322 compliant email regex
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  if (!emailRegex.test(clean)) return false;

  const parts = clean.split('@');
  if (parts.length !== 2) return false;
  const [localPart, domain] = parts;
  if (!localPart || !domain || localPart.length > 64) return false;

  // Domain structure checks
  const domainParts = domain.split('.');
  if (domainParts.length < 2) return false;

  // TLD must be at least 2 alpha characters (e.g. .com, .in, .org, .io)
  const tld = domainParts[domainParts.length - 1];
  if (!tld || tld.length < 2 || !/^[a-zA-Z]+$/.test(tld)) return false;

  // Block obviously fake or throwaway domain patterns
  const blockedDomains = [
    'test.com',
    'example.com',
    'fake.com',
    'dummy.com',
    'temp.com',
    'mailinator.com',
    'tempmail.com',
    '10minutemail.com',
    'throwaway.com',
    'sample.com',
  ];
  if (blockedDomains.includes(domain)) return false;

  return true;
}

/**
 * Validates 10-digit Indian mobile number.
 */
export function isValidPhone(phone: string): boolean {
  const clean = phone.replace(/\D/g, '');
  return clean.length === 10;
}

/**
 * Validates password strength (min 8 chars, at least 1 letter and 1 number/symbol).
 */
export function isValidPassword(password: string): { valid: boolean; error?: string } {
  if (!password || password.length < 8) {
    return { valid: false, error: 'Password must be at least 8 characters long.' };
  }
  if (!/[a-zA-Z]/.test(password)) {
    return { valid: false, error: 'Password must contain at least one letter.' };
  }
  if (!/[0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
    return {
      valid: false,
      error: 'Password must contain at least one number or special character.',
    };
  }
  return { valid: true };
}
