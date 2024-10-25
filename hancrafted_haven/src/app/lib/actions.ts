'use server';

import { signIn } from 'next-auth/react';
import { AuthError } from 'next-auth';

export async function authenticate(
  formData: FormData,
) {
  try {
    const signInData: Record<string, string> = {};
    formData.forEach((value, key) => {
      signInData[key] = value.toString();
    });
    await signIn('credentials', signInData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}