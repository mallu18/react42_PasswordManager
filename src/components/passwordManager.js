import './passwordManager.css'
import React, {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

class PasswordManager extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    searchTerm: '',
    passwords: [],
    showPassword: false,
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  addPassword = event => {
    event.preventDefault()
    const {website, username, password, passwords} = this.state

    if (website && username && password) {
      const newPassword = {
        id: uuidv4(),
        website,
        username,
        password,
      }

      this.setState({
        passwords: [...passwords, newPassword],
        website: '',
        username: '',
        password: '',
      })
    }
  }

  deletePassword = id => {
    const {passwords} = this.state
    const updatedPasswords = passwords.filter(password => password.id !== id)
    this.setState({passwords: updatedPasswords})
  }

  toggleShowPasswords = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  render() {
    const {website, username, password, searchTerm, passwords, showPassword} =
      this.state
    const filteredPasswords = passwords.filter(password =>
      password.website.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    // const firstLetter = username ? username.charAt(0).toUpperCase() : ''
    return (
      <div className="bg-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
        </div>

        <div className="main-card">
          <div className="input-card-container">
            <div className="card">
              <h1 className="para">Add New Password</h1>

              <form onSubmit={this.addPassword} className="form-container">
                <div className="input-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="input-logo"
                  />
                  <input
                    type="text"
                    placeholder="Enter Website"
                    className="input"
                    name="website"
                    value={website}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="input-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="input-logo"
                  />
                  <input
                    type="text"
                    placeholder="Enter Username"
                    className="input"
                    name="username"
                    value={username}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="input-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                    alt="password"
                    className="input-logo"
                  />
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="input"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                  />
                </div>

                <button className="button" type="submit">
                  Add
                </button>
              </form>
            </div>

            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              className="bg-img"
              alt="password manager"
            />
          </div>

          <div className="output-card-container">
            <div className="top">
              <div className="yyyy">
                <h1 className="your-password">Your Passwords</h1>
                <p>{filteredPasswords.length}</p>
              </div>

              <div className="search-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="input-logo-search"
                />
                <input
                  type="search"
                  placeholder="Search"
                  className="input-search"
                  name="searchTerm"
                  value={searchTerm}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <hr className="seperator" />

            <div className="show-password">
              <label className="label">
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={this.toggleShowPasswords}
                />
                Show Passwords
              </label>
            </div>

            <div>
              <ul className="password-list">
                {filteredPasswords.length === 0 ? (
                  <div className="no-password-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                      alt="no passwords"
                      className="no-password-image"
                    />
                    <p>No Passwords found</p>
                  </div>
                ) : (
                  filteredPasswords.map(({id, website, username, password}) => (
                    <li key={id} className="password-item">
                      <div className="profile">
                        {username.charAt(0).toUpperCase()}
                      </div>

                      <div>
                        <p>Website: {website}</p>
                        <p>Username: {username}</p>
                        <p>
                          Password:{' '}
                          {showPassword ? (
                            password
                          ) : (
                            <img
                              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                              alt="stars"
                              className="star"
                            />
                          )}
                        </p>
                      </div>

                      <button
                        onClick={() => this.deletePassword(id)}
                        data-testid="delete"
                        className="delete-btn"
                      >
                        <img
                          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                          alt="delete"
                          className="delete"
                        />
                      </button>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager

// import './passwordManager.css'
// import React, {Component} from 'react'
// import {v4 as uuidv4} from 'uuid'

// class PasswordManager extends Component {
//   state = {
//     website: '',
//     username: '',
//     password: '',
//     searchTerm: '',
//     passwords: [],
//     showPassword: false,
//   }

//   handleChange = event => {
//     this.setState({
//       [event.target.name]: event.target.value,
//     })
//   }

//   addPassword = event => {
//     event.preventDefault()
//     const {website, username, password, passwords} = this.state

//     if (website && username && password) {
//       const newPassword = {
//         id: uuidv4(),
//         website,
//         username,
//         password,
//       }

//       this.setState({
//         passwords: [...passwords, newPassword],
//         website: '',
//         username: '',
//         password: '',
//       })
//     }
//   }

//   deletePassword = id => {
//     const {passwords} = this.state
//     const updatedPasswords = passwords.filter(password => password.id !== id)
//     this.setState({passwords: updatedPasswords})
//   }

//   toggleShowPasswords = () => {
//     this.setState(prevState => ({
//       showPassword: !prevState.showPassword,
//     }))
//   }

//   render() {
//     const {website, username, password, searchTerm, passwords, showPassword} =
//       this.state

//     const filteredPasswords = passwords.filter(pwd =>
//       pwd.website.toLowerCase().includes(searchTerm.toLowerCase()),
//     )

//     return (
//       <div className="bg-container">
//         <div className="logo-container">
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
//             alt="app logo"
//             className="app-logo"
//           />
//         </div>

//         <div className="main-card">
//           <div className="input-card-container">
//             <div className="card">
//               <p className="para">Add New Password</p>

//               <form className="form-container" onSubmit={this.addPassword}>
//                 <div className="input-container">
//                   <img
//                     src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
//                     alt="website"
//                     className="input-logo"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Enter Website"
//                     className="input"
//                     name="website"
//                     value={website}
//                     onChange={this.handleChange}
//                   />
//                 </div>

//                 <div className="input-container">
//                   <img
//                     src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
//                     alt="username"
//                     className="input-logo"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Enter Username"
//                     className="input"
//                     name="username"
//                     value={username}
//                     onChange={this.handleChange}
//                   />
//                 </div>

//                 <div className="input-container">
//                   <img
//                     src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
//                     alt="password"
//                     className="input-logo"
//                   />
//                   <input
//                     type="password"
//                     placeholder="Enter Password"
//                     className="input"
//                     name="password"
//                     value={password}
//                     onChange={this.handleChange}
//                   />
//                 </div>

//                 <button className="button" type="submit">
//                   Add
//                 </button>
//               </form>
//             </div>

//             <img
//               src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
//               alt="password manager"
//               className="bg-img"
//             />
//           </div>

//           <div className="output-card-container">
//             <div className="top">
//               <p className="your-password">
//                 Your Passwords{' '}
//                 <span className="count">{filteredPasswords.length}</span>
//               </p>

//               <div className="search-container">
//                 <img
//                   src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
//                   alt="search"
//                   className="input-logo-search"
//                 />
//                 <input
//                   type="search"
//                   placeholder="Search"
//                   className="input-search"
//                   name="searchTerm"
//                   value={searchTerm}
//                   onChange={this.handleChange}
//                 />
//               </div>
//             </div>

//             <hr className="separator" />

//             <div className="show-password">
//               <label className="label">
//                 <input
//                   type="checkbox"
//                   checked={showPassword}
//                   onChange={this.toggleShowPasswords}
//                 />
//                 Show Passwords
//               </label>
//             </div>

//             <ul className="password-list">
//               {filteredPasswords.length === 0 ? (
//                 <div className="no-password-container">
//                   <img
//                     src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
//                     alt="no passwords"
//                     className="no-password-image"
//                   />
//                   <p>No Passwords found</p>
//                 </div>
//               ) : (
//                 filteredPasswords.map(({id, website, username, password}) => (
//                   <li>
//                     <div key={id} className="password-item">
//                       <div className="profile">
//                         {username.charAt(0).toUpperCase()}
//                       </div>

//                       <div>
//                         <p>Website: {website}</p>
//                         <p>Username: {username}</p>
//                         <p>Password: {showPassword ? password : '********'}</p>
//                       </div>

//                       <button
//                         onClick={() => this.deletePassword(id)}
//                         data-testid="delete"
//                       >
//                         <img
//                           src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
//                           alt="delete"
//                         />
//                       </button>
//                     </div>
//                   </li>
//                 ))
//               )}
//             </ul>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default PasswordManager

// import './passwordManager.css'
// import React, {Component} from 'react'
// import {v4 as uuidv4} from 'uuid'

// class PasswordManager extends Component {
//   state = {
//     website: '',
//     username: '',
//     password: '',
//     searchTerm: '',
//     passwords: [],
//     showPassword: false,
//   }

//   handleChange = event => {
//     this.setState({
//       [event.target.name]: event.target.value,
//     })
//   }

//   addPassword = event => {
//     event.preventDefault()
//     const {website, username, password, passwords} = this.state

//     if (website && username && password) {
//       const newPassword = {
//         id: uuidv4(),
//         website,
//         username,
//         password,
//       }

//       this.setState({
//         passwords: [...passwords, newPassword],
//         website: '',
//         username: '',
//         password: '',
//       })
//     }
//   }

//   deletePassword = id => {
//     const {passwords} = this.state
//     const updatedPasswords = passwords.filter(password => password.id !== id)
//     this.setState({passwords: updatedPasswords})
//   }

//   toggleShowPasswords = () => {
//     this.setState(prevState => ({
//       showPassword: !prevState.showPassword,
//     }))
//   }

//   render() {
//     const {website, username, password, searchTerm, passwords, showPassword} =
//       this.state

//     const filteredPasswords = passwords.filter(pwd =>
//       pwd.website.toLowerCase().includes(searchTerm.toLowerCase()),
//     )

//     return (
//       <div className="bg-container">
//         <div className="logo-container">
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
//             alt="app logo"
//             className="app-logo"
//           />
//         </div>

//         <div className="main-card">
//           <div className="input-card-container">
//             <div className="card">
//               <h1>Add New Password</h1>

//               <form className="form-container" onSubmit={this.addPassword}>
//                 <div className="input-container">
//                   <img
//                     src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
//                     alt="website"
//                     className="input-logo"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Enter Website"
//                     className="input"
//                     name="website"
//                     value={website}
//                     onChange={this.handleChange}
//                   />
//                 </div>

//                 <div className="input-container">
//                   <img
//                     src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
//                     alt="username"
//                     className="input-logo"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Enter Username"
//                     className="input"
//                     name="username"
//                     value={username}
//                     onChange={this.handleChange}
//                   />
//                 </div>

//                 <div className="input-container">
//                   <img
//                     src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
//                     alt="password"
//                     className="input-logo"
//                   />
//                   <input
//                     type="password"
//                     placeholder="Enter Password"
//                     className="input"
//                     name="password"
//                     value={password}
//                     onChange={this.handleChange}
//                   />
//                 </div>

//                 <button className="button" type="submit">
//                   Add
//                 </button>
//               </form>
//             </div>

//             <img
//               src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
//               alt="password manager"
//               className="bg-img"
//             />
//           </div>

//           <div className="output-card-container">
//             <div className="top">
//               <h1>Your Passwords</h1>
//               <p className="count">{filteredPasswords.length}</p>

//               <div className="search-container">
//                 <img
//                   src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
//                   alt="search"
//                   className="input-logo-search"
//                 />
//                 <input
//                   type="search"
//                   placeholder="Search"
//                   className="input-search"
//                   name="searchTerm"
//                   value={searchTerm}
//                   onChange={this.handleChange}
//                 />
//               </div>
//             </div>

//             <hr className="separator" />

//             <div className="show-password">
//               <label className="label">
//                 <input
//                   type="checkbox"
//                   checked={showPassword}
//                   onChange={this.toggleShowPasswords}
//                 />
//                 Show Passwords
//               </label>
//             </div>

//             <ul className="password-list">
//               {filteredPasswords.length === 0 ? (
//                 <div className="no-password-container">
//                   <img
//                     src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
//                     alt="no passwords"
//                     className="no-password-image"
//                   />
//                   <p>No Passwords found</p>
//                 </div>
//               ) : (
//                 filteredPasswords.map(({id, website, username, password}) => (
//                   <li key={id} className="password-item">
//                     <div className="profile">
//                       {username.charAt(0).toUpperCase()}
//                     </div>

//                     <div>
//                       <p>Website: {website}</p>
//                       <p>Username: {username}</p>
//                       <p>
//                         Password:{' '}
//                         {showPassword ? (
//                           password
//                         ) : (
//                           <img
//                             src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
//                             alt="stars"
//                           />
//                         )}
//                       </p>
//                     </div>

//                     <button
//                       onClick={() => this.deletePassword(id)}
//                       data-testid="delete"
//                     >
//                       <img
//                         src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
//                         alt="delete"
//                       />
//                     </button>
//                   </li>
//                 ))
//               )}
//             </ul>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default PasswordManager
