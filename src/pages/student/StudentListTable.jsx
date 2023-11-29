import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Grid, Typography, Button } from "@mui/material";
import StudentListSearchBar from "./student-table/StudentListSearchBar";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";

function StudentListTable() {
  const [studentList, setStudentList] = useState([]);

  const fetchStudents = () => {
    let students = JSON.parse(localStorage.getItem("students")) || studentList;
    setStudentList(students);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const navigate = useNavigate();

  const navigateToStudentRegistrationPage = () => {
    // Navigate to the "register" path
    navigate("/student/register");
  };

  // search student by id or name or department
  const searchStudent = (searchText) => {
    if (searchText.trim() != "") {
      let students = JSON.parse(localStorage.getItem("students")) || [];

      let searchString = searchText.toLowerCase();

      let matchedStudents = students.filter(
        (student) =>
          student.id == searchString ||
          student.firstName.toLowerCase().startsWith(searchString) ||
          student.lastName.toLowerCase().startsWith(searchString) ||
          student.course.toLowerCase().startsWith(searchString)
      );

      setStudentList(matchedStudents);
    }
  };

  // blacklist student
  const blacklistStudent = (studentId) => {
    let fetchedStudentList = JSON.parse(localStorage.getItem("students")) || [];

    let matchedStudentIndex = fetchedStudentList.findIndex(
      (student) => student.id == studentId
    );

    fetchedStudentList[matchedStudentIndex].isBlacklisted = true;
    localStorage.setItem("students", JSON.stringify(fetchedStudentList));
    fetchStudents();
  };

  // unblacklist student
  const unblacklistStudent = (studentId) => {
    let fetchedStudentList = JSON.parse(localStorage.getItem("students")) || [];

    let matchedStudentIndex = fetchedStudentList.findIndex(
      (student) => student.id == studentId
    );

    fetchedStudentList[matchedStudentIndex].isBlacklisted = false;
    localStorage.setItem("students", JSON.stringify(fetchedStudentList));
    fetchStudents();
  };
  // Edit Student
  const editStudent = (studentId) => {
    let matchedStudent = studentList.filter(
      (student) => student.id == studentId
    )[0];

    localStorage.setItem("editable-student", JSON.stringify(matchedStudent));
    navigate("/student/register");
  };

  const handleExport = () => {
    const convertToCSV = (dataArray) => {
      const header = Object.keys(dataArray[0]).join(",");
      const rows = dataArray.map((obj) => Object.values(obj).join(","));
      return `${header}\n${rows.join("\n")}`;
    };

    const downloadCSV = (csvData, fileName) => {
      const blob = new Blob([csvData], { type: "text/csv" });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = fileName;
      link.click();
    };

    const fileName = "student_data.csv";
    let students = JSON.parse(localStorage.getItem("students")) || studentList;
    const csvData = convertToCSV(students);
    downloadCSV(csvData, fileName);
  };

  return (
    <>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ marginBottom: "20px" }}
      >
        <Typography xs={3} fontSize="24px">
          Student Profile
        </Typography>
        <Grid item xs={8} height={"1px"}>
          <StudentListSearchBar
            onSearchStudent={(e) => {
              searchStudent(e);
            }}
          />
        </Grid>

        <Grid item xs={0.5}>
          <IconButton aria-label="edit">
            <FileDownloadIcon onClick={handleExport} />
          </IconButton>
        </Grid>

        <Grid item>
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={navigateToStudentRegistrationPage}
          >
            Register
          </Button>
        </Grid>
      </Grid>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Student ID</TableCell>
              <TableCell align="right">Department</TableCell>
              <TableCell align="right">Gender</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentList.length == 0 && (
              <TableRow style={{ padding: "30px" }}>
                No student. Click "Register" to create a student detail
              </TableRow>
            )}

            {studentList.length > 0 &&
              studentList.map((student) => (
                <TableRow
                  key={student.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {student.firstName} {student.lastName}
                  </TableCell>
                  <TableCell align="right">{student.id}</TableCell>
                  <TableCell align="right">{student.course}</TableCell>
                  <TableCell align="right">{student.gender}</TableCell>
                  {!student.isBlacklisted && (
                    <IconButton
                      aria-label="edit"
                      onClick={() => editStudent(student.id)}
                    >
                      <EditIcon />
                    </IconButton>
                  )}
                  {/* Blacklist button */}
                  {!student.isBlacklisted && (
                    <IconButton
                      aria-label="edit"
                      color="#000"
                      onClick={() => blacklistStudent(student.id)}
                    >
                      <DoNotDisturbAltIcon />
                    </IconButton>
                  )}
                  {student.isBlacklisted && (
                    <IconButton
                      aria-label="edit"
                      color="#000"
                      onClick={() => unblacklistStudent(student.id)}
                    >
                      UNBLACKLIST
                    </IconButton>
                  )}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default StudentListTable;
