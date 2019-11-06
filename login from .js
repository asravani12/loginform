import React from 'react';
class Loginform extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            username='',
            password=''
        }
    }
    render()
    {
        return(
         <div>
              <from classname="loginform"/>
               <h2>loginform</h2>
               <form>
                 <tr>
                     <th>
                         <label>
                             username:
                              <input type="text" classname="text-field" placeholder="username"/>
                          </label>
                     </th>  
                 </tr>
                    <tr>
                       <th>
                         <label>
                             username:
                             <input type="text" classname="text-field" placeholder="username"/>
                         </label>
                     </th>  
                  </tr>
                 <input type="submit" value="button"/>
               </form>
            </div>
        );
    }
}
export default Loginform;