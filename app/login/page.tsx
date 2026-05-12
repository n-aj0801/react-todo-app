'use client'
import { useState, type FormEvent } from 'react';
import { createClient } from '../../lib/supabase/client';

export default function LoginPage() {
  const [value, setValue] = useState('');
  const [status, setStatus] = useState<string | null>(null);
  const supabase = createClient();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email: value,
        options: {
          // Set to false if you do not want to create users automatically
          shouldCreateUser: true,
          emailRedirectTo: 'http://localhost:3000/auth/confirm',
        },
      })

      if (error) {
        console.error('signInWithOtp error:', error);
        setStatus(error.message ?? 'OTP送信に失敗しました。');
        return;
      }

      setStatus('メールを送信しました。届いたメールを確認してください。');
    } catch (err) {
      console.error('signInWithOtp exception:', err);
      setStatus(err instanceof Error ? err.message : '不明なエラーが発生しました。');
    }
  };
  return (
    <div>
      <h2>Confirm your signup</h2>
      <p>Enter your email</p>
      {status ? <p>{status}</p> : null}
      <form onSubmit={(e)=>onSubmit(e)}>
        <input 
        type="email" value={value} onChange={(e)=>setValue(e.target.value)}/>
        <button type="submit">send</button>
      </form>
    </div>
  )
}