import Box_info from './Components/Box_info';
import Student_table from './Components/Student_table';
import Depart_list from './Components/Depart_list';
import Course_list from './Components/Course_list';


const Admin = () => {
 

  return (
    <div className="min-h-screen p-8 flex flex-col gap-5">

       <Box_info />
       <Student_table />
       <Depart_list />
       <Course_list />

    </div>
  );
};

export default Admin;
