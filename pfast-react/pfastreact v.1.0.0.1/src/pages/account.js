import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const Account = ({session}) => {

    useEffect(() => {
        getProfile()
      }, [session])

      const getProfile = async () => {
        try {
        //   setLoading(true)
          // const { user } = session
    

        //   let { data, error, status } = await supabase
        //     .from('profiles')
        //     .select(`username, website, avatar_url`)
        //     .eq('id', user.id)
        //     .single()
    
        //   if (error && status !== 406) {
        //     throw error
        //   }
    
        //   if (data) {
        //     setUsername(data.username)
        //     setWebsite(data.website)
        //     setAvatarUrl(data.avatar_url)
        //   }
        } catch (error) {
          alert(error.message)
        } finally {
        //   setLoading(false)
        }
    }

    
    return (
      <>
        <div>
            <h2>myspace</h2>
        </div>

        <Navbar/>
      </>
        
    )

    
}

export default Account