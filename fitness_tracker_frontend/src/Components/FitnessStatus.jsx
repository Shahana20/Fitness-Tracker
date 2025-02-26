import { useFormik } from "formik";
import * as Yup from "yup";

const FitnessStatus = ({ nextStep, prevStep, formData }) => {
  const formik = useFormik({
    initialValues: formData || {
      height: "",
      weight: "",
      activity_level: "",
      step_count: "",
    },
    validationSchema: Yup.object({
      height: Yup.number()
        .positive("Enter a valid height")
        .required("Height is required"),
      weight: Yup.number()
        .positive("Enter a valid weight")
        .required("Weight is required"),
      activity_level: Yup.string().required("Activity Level is required"),
      step_count: Yup.number()
        .positive("Enter a valid step count")
        .required("Step count is required"),
    }),
    onSubmit: (values) => {
      console.log("Fitness Status Submitted:", values);
      nextStep(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} style={{ width: "300px", margin: "auto" }}>
      <h2 style={{ textAlign: "center" }}>Fitness Status</h2>

      <div style={{ marginTop: "10px" }}>
        <label>Height (cm)</label>
        <input
          type="number"
          {...formik.getFieldProps("height")}
          style={{ width: "100%", padding: "8px", marginTop: "5px" }}
        />
        {formik.touched.height && formik.errors.height && (
          <div style={{ color: "red", fontSize: "12px" }}>{formik.errors.height}</div>
        )}
      </div>

      <div style={{ marginTop: "10px" }}>
        <label>Weight (kg)</label>
        <input
          type="number"
          {...formik.getFieldProps("weight")}
          style={{ width: "100%", padding: "8px", marginTop: "5px" }}
        />
        {formik.touched.weight && formik.errors.weight && (
          <div style={{ color: "red", fontSize: "12px" }}>{formik.errors.weight}</div>
        )}
      </div>

      <div style={{ marginTop: "10px" }}>
        <label>Activity Level</label>
        <select {...formik.getFieldProps("activity_level")} style={{ width: "100%", padding: "8px", marginTop: "5px" }}>
          <option value="">Select Activity Level</option>
          <option value="Sedentary">Sedentary</option>
          <option value="Lightly Active">Lightly Active</option>
          <option value="Moderately Active">Moderately Active</option>
          <option value="Very Active">Very Active</option>
        </select>
        {formik.touched.activity_level && formik.errors.activity_level && (
          <div style={{ color: "red", fontSize: "12px" }}>{formik.errors.activity_level}</div>
        )}
      </div>

      <div style={{ marginTop: "10px" }}>
        <label>Daily Step Count</label>
        <input
          type="number"
          {...formik.getFieldProps("step_count")}
          style={{ width: "100%", padding: "8px", marginTop: "5px" }}
        />
        {formik.touched.step_count && formik.errors.step_count && (
          <div style={{ color: "red", fontSize: "12px" }}>{formik.errors.step_count}</div>
        )}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
        <button type="button" onClick={prevStep} style={{ padding: "10px 20px", backgroundColor: "#ccc", border: "none", cursor: "pointer" }}>Back</button>
        <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "#fff", border: "none", cursor: "pointer" }}>Next</button>
      </div>
    </form>
  );
};

export default FitnessStatus;
