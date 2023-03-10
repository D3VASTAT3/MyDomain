import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import supabase from "../config/supabaseClient";



const Auth = async (setsession) => {

  supabase.auth.getSession().then(({ data: { session } }) => {
    setsession(session)
  })

  
  supabase.auth.onAuthStateChange((event, session) => {
    setsession(session)
  })

  
}

const Account = async (setuser) => {

  const { data: { user } } = await supabase.auth.getUser()
  setuser(user.id)

}

export {Auth, Account}