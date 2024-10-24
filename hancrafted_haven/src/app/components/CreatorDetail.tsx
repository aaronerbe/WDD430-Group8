'use client'
import { User} from '@/app/types/productTypes';
//import Image from 'next/image';
import Link from 'next/link';
//import { useState } from 'react';


const CreatorDetail = ({

   // images,
    user

}: {
 
   // images: Image_[]; 
    user: User; 
   
}) => { 
    
    //useState to track if 'products' exist or not
    //const [isProducts, setIsProducts] = useState(false);
    ////if Product updates, recheck if products has content
    //useEffect(() =>{
    //    if (products){
    //        setIsProducts(true);
    //    }
    //},[product])

   // const authenticatedUserId: number = 16 //todo hardcoded right now.  Need this to pass in auth user for addReview
    //todo  will also use this to hide or show the Add Review button.

    //Had to do this since this is a client side and cannot access the env variables to be able to write to the db.  Calls an api instead which handles it for us.
    //TODO need to work out a way to prevent a user from submitting multiple reviews for a product.  if it has one, hide the 'add review' button.  could instead to 'edit review'??




  // Handle delete functionality
  const handleDelete = async (id: number) => {
    if (confirm('Are you sure you want to delete this creator profile?')) {
      await fetch(`/api/creator/${id}`, {
        method: 'DELETE',
      });
   
    }
  };


    //alert(user.id)

    return (
        <div className="container">
        <h1>Creator Profiles</h1>
        <Link href="/creator/create">
          <button>Create New Profile</button>
        </Link>
  
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Bio</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
           
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.bio}</td>
                <td>{user.email}</td>
             
                <td>
                  <Link href={`/creator/edit/${user.id}`}>
                    <button>Edit</button>
                  </Link>
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            
          </tbody>
        </table>
      </div>
    );

        
}

export default CreatorDetail;
