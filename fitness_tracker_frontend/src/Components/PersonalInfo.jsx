import { useFormik } from "formik";
import * as Yup from "yup";

const PersonalInfo = ({ nextStep, formData }) => {
  const formik = useFormik({
    initialValues: formData || { name: "", age: "", gender: "", fitness_goal: "" },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      age: Yup.number().positive().integer().required("Age is required"),
      gender: Yup.string().required("Gender is required"),
      fitness_goal: Yup.string().required("Fitness goal is required"),
    }),
    onSubmit: (values) => {
      console.log("Personal Info Submitted:", values);
      nextStep(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} style={{ width: "300px", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2 style={{ textAlign: "center" }}>Personal Information</h2>

      <div style={{ marginBottom: "10px" }}>
        <label>Name:</label>
        <input
          type="text"
          {...formik.getFieldProps("name")}
          style={{ width: "100%", padding: "8px", marginTop: "5px", border: "1px solid #ccc", borderRadius: "4px" }}
        />
        {formik.touched.name && formik.errors.name && <p style={{ color: "red", fontSize: "12px" }}>{formik.errors.name}</p>}
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Age:</label>
        <input
          type="number"
          {...formik.getFieldProps("age")}
          style={{ width: "100%", padding: "8px", marginTop: "5px", border: "1px solid #ccc", borderRadius: "4px" }}
        />
        {formik.touched.age && formik.errors.age && <p style={{ color: "red", fontSize: "12px" }}>{formik.errors.age}</p>}
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Gender:</label>
        <select
          {...formik.getFieldProps("gender")}
          style={{ width: "100%", padding: "8px", marginTop: "5px", border: "1px solid #ccc", borderRadius: "4px" }}
        >
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        {formik.touched.gender && formik.errors.gender && <p style={{ color: "red", fontSize: "12px" }}>{formik.errors.gender}</p>}
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Fitness Goal:</label>
        <select
          {...formik.getFieldProps("fitness_goal")}
          style={{ width: "100%", padding: "8px", marginTop: "5px", border: "1px solid #ccc", borderRadius: "4px" }}
        >
          <option value="">Select</option>
          <option value="Lose Weight">Lose Weight</option>
          <option value="Gain Muscle">Gain Muscle</option>
          <option value="Stay Active">Stay Active</option>
        </select>
        {formik.touched.fitness_goal && formik.errors.fitness_goal && <p style={{ color: "red", fontSize: "12px" }}>{formik.errors.fitness_goal}</p>}
      </div>

      <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "blue", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
        Next
      </button>
    </form>
  );
};

export default PersonalInfo;