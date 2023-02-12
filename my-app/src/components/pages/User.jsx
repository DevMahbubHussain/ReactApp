
import React, { useState } from 'react'
import { useParams,useSearchParams } from 'react-router-dom'
const User = () => {
    const { id } = useParams();
    const [name, setIname] = useState('');
    const [searchParam, setSearchParam] = useSearchParams();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchParam({ name:name });
    };

  return (
      <div className='wrapper'>
          <form onSubmit={handleSubmit}>
              <input type="text" name='' value={name} onChange={(e) => {
                  setIname(e.target.value);
              }}
              />
              <button type="submit">Find User</button>
          </form>
    {/* //   <h2>User ID - {searchParam.get("id")}</h2>
    //   <h2>User Name - {searchParam.get("name")}</h2> */}
    </div>
  );
}

export default User
