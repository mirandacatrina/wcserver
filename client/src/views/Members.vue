<template>
    <div class="stan">
        <img alt="Marvel" src="../assets/bg2.jpg">


    <div class="members">
         <h2>AVENGERS</h2>
        <table>
           
            <tr>
                <td></td>
                <td></td>
                <td><input type="text" class="search" placeholder="Input Member's Name">
                    <input type="submit" class="search" value="Search"></td>
            </tr>
            <tr>
                <td><img alt="Iron Man" src="../assets/m1.jpg"></td>
                <td><img alt="Iron Man" src="../assets/m2.jpg"></td>
                <td><img alt="Iron Man" src="../assets/m3.jpg"></td>
            </tr>

            <tr>
                <td><h5>Tony Stark<br>
                        Malibu, CA<br>
                        tonystark@gmail.com</h5>
                        <input type="submit" class="view" value="View"><br>
                          <br>
                        <input type="submit" class="view" value="Add Friend"></td>

                <td><h5>Steve Rogers<br>
                        Brooklyn Heights<br>
                        steverogers@gmail.com</h5>
                        <input type="submit" class="view" value="View"><br>
                        <br>
                        <input type="submit" class="view" value="Add Friend"></td>
                <td><h5>Thor Odinson<br>
                        Asgard<br>
                        thorodin@gmail.com</h5>
                        <input type="submit" class="view" value="View"><br>
                          <br>
                        <input type="submit" class="view" value="Add Friend"></td>
            </tr>

            <tr>
                <td><img alt="Iron Man" src="../assets/m4.jpg"></td>
                <td><img alt="Iron Man" src="../assets/m5.jpg"></td>
                <td><img alt="Iron Man" src="../assets/m6.jpg"></td>
            </tr>

            <tr>
                <td><h5>Natasha Romanoff<br>
                        Russia<br>
                        natromanoff@gmail.com</h5>
                        <input type="submit" class="view" value="View"><br>
                          <br>
                        <input type="submit" class="view" value="Add Friend"></td>

                <td><h5>Wanda Maximoff<br>
                        Serbia<br>
                        wandamaxim@gmail.com</h5>
                        <input type="submit" class="view" value="View"><br>
                          <br>
                        <input type="submit" class="view" value="Add Friend"></td>
                <td><h5>Peter Parker<br>
                        Forest Hills, NYC<br>
                        peterparker@gmail.com</h5>
                        <input type="submit" class="view" value="View"><br>
                          <br>
                        <input type="submit" class="view" value="Add Friend"></td>
            </tr>
            </table>
            <div id="footer">
                <h6>&copy; 2020, Marvel Heroes</h6>
            </div>
        </div>
    </div>

    
</template>








<script>
//import axios from 'axios'
//import router from '../router'
export default{
        data (){
            return{
                fname: '',
                Mname: '',
                lname: '',
                Adress: '',
                DOB:'',
                Email:'',
                Uname: '',
                Pass:''
            }
        },
        methods:
        {
            registerUser()
            {
                if (this.fname==='')
                {
                    alert('Please enter your first name:')
                }
            }
        }
    }
</script>
<style>

</style>
