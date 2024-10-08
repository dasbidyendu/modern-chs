'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    }
   
  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    console.log(error.message)
  }

  revalidatePath('/', 'layout')
  redirect('/free')
}

export async function signup(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const regdata = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    username: formData.get('username') as string
}


  const { error } = await supabase.auth.signUp(regdata,)

  if (error) {
    console.log(error.message)
  }

  revalidatePath('/', 'layout')
    redirect('/free');
}