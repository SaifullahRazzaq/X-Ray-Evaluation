import React,{Component} from 'react';
import '../App.css';
class Admin extends Component{
constructor(){
    super()
    
    this.state=
    {
        
    }
}

render()
{
    return(
  <div>

  <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Hip And Knee Step by Step</a>
    </div>
    <ul class="nav navbar-nav right">
      <li class="active"><a href="#"></a></li>
      <li><a href="#">Admin</a></li>
      <li><a href="#">Register</a></li>
    </ul>
  </div>
        </nav>
       
        <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <form class="form-signin">
              <div class="form-label-group">
                <label for="inputEmail">Email address</label>
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
              </div>

              <div class="form-label-group">
                <label for="inputPassword">Password</label>
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
              </div><br/>

              <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
              <hr class="my-4"/>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
      
  </div>
    
    )
}
}
export default Admin;