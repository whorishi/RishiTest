import "./App.css";
// 0710rishi@gmail.com
function App() {
    return ( <
        >
        <
        h1 > Admission Form < /h1> <
        div className = "adform" >
        <
        form >
        <
        p >
        <
        label htmlFor = "name"
        className = "input_field" > Student Name: < /label> <
        input type = "text" / >
        <
        br / >
        <
        /p> <
        p >
        <
        label htmlFor = "enrollment"
        className = "input_field" > Enrollment Number: < /label> <
        input type = "text" / >
        <
        br / >
        <
        /p> <
        p >
        <
        label htmlFor = "branch"
        className = "input_field" > Branch: < /label> <
        select >
        <
        option value = "CSE"
        className = "input_field"
        selected >
        Computer Science Engineering <
        /option> <
        option value = "Mech" > Mechanical Engineering < /option> <
        option value = "Chem" > Chemical Engineering < /option> <
        option value = "ECE" > Electrical Engineering < /option> < /
        select > <
        br / >
        <
        /p> <
        p >
        <
        label htmlFor = "batch"
        className = "input_field" > Batch: < /label> <
        input type = "text" / >
        <
        br / >
        <
        /p> <
        p >
        <
        h2 className = "text1" > Your Introduction: < /h2> <
        textarea placeholder = "Write your experience in your Summer Internship at Diginique Techlab" / >
        <
        br / >
        <
        /p> < /
        form > <
        /div> < / >
    );
}

export default App;