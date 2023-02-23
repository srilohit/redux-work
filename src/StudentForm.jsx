import React,{useState} from "react";

var StudentForm = ()=>{

    const [students,setStudents] = useState({
        firstname:'',
        lastname:'',
        dob:'',
        gender:'',
        email: '',
        city:'',
        state:'',
        pincode:''
    });

    var addStudent =()=>{
        console.log(students)
    }

    var handleSubmit =(e)=>{
        e.preventDefault();
        addStudent();
    }

    var handlePin =(e)=>{
        if(e.target.value>999999 || e.target.value<=100000){
           e.target.style.border = '2px solid red';
        }
        else{
            e.target.style.border = '';
            setStudents({...students,pincode:e.target.value})
        }
    }

    return(
        <div className="border border-2 border-success m-2 p-2">
            <h1>STUDENTS DETAILS</h1>
            <div className="d-flex justify-content-center">
            <form onSubmit={handleSubmit} className="form-control" style={{width:'28%'}}>
                <table width={'50%'}  cellPadding='4'>
                    <tr>
                        <td>FirstName<b className="text-danger">*</b></td>
                        <td><input type="text" required onChange={(e)=>{setStudents({...students,firstname:e.target.value})}}/></td>
                    </tr>
                    <tr>
                        <td>LastName<b className="text-danger">*</b></td>
                        <td><input type="text" required onChange={(e)=>{setStudents({...students,lastname:e.target.value})}}/></td>
                    </tr>
                    <tr>
                        <td>Date of Birth <b className="text-danger">*</b></td>
                        <td><input type="date" onChange={(e)=>{setStudents({...students,dob:e.target.value})}}/></td>
                    </tr>
                    <tr>
                        <td>Gender <b className="text-danger">*</b></td>
                        <td>
                            <input type="radio" name="gender" value={'male'} onChange={(e)=>{setStudents({...students,gender:e.target.value})}}/>:male
                            <input type="radio" name="gender" value={'female'} onChange={(e)=>{setStudents({...students,gender:e.target.value})}}/>:female
                            <input type="radio" name="gender" value={'others'} onChange={(e)=>{setStudents({...students,gender:e.target.value})}}/>:others
                        </td>
                    </tr>
                    <tr>
                        <td>Email ID <b className="text-danger">*</b></td>
                        <td><input type="email" onChange={(e)=>{setStudents({...students,email:e.target.value})}}/></td>
                    </tr>
                    <tr></tr>
                    <tr>
                        <td>City <b className="text-danger">*</b></td>
                        <td><select onChange={(e)=>{setStudents({...students,city:e.target.value})}}>
                                <option value="">select one</option>
                                <option value="ANAK">anakapale</option>
                                <option value="BOBILI">Bobili</option>
                                <option value="CHITOOR">chitoor</option>
                                <option value="KURNOOL">kurnool</option>
                                <option value="VISA">visakhapatnam</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>State <b className="text-danger">*</b></td>
                        <td>
                            <select onChange={(e)=>{setStudents({...students,state:e.target.value})}}>
                                <option value="">select one</option>
                                <option value="AP">Andhra Pradesh</option>
                                <option value="BIHAR">Bihar</option>
                                <option value="DEHLI">Delhi</option>
                                <option value="GOA">GOA</option>
                                <option value="TN">Tamil Naidu</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Pincode <b className="text-danger">*</b></td>
                        <td><input type="number" onBlur={handlePin}/></td>
                    </tr>
                    <tr>
                        <td colSpan={'2'} align='center'><button className="btn btn-outline-warning">Add Student</button></td>
                    </tr>
                </table>
            </form>
            </div>
        </div>
    )
}

export default StudentForm;