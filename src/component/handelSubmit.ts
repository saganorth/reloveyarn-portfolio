import { FormDataType } from "../models/FromDataType";


export const handleSubmit = async (data: FormDataType): Promise<{ message: string } | null> => {
  try {
    console.log(" Simulated form submission data:", JSON.stringify(data, null, 2));

 
    await new Promise((resolve) => setTimeout(resolve, 500));


    return { message: "Form submitted successfully!" };
  } catch (error) {
    console.error("Simulated submission failed:", error);
    return null;
  }
};

export const fetchUpdatedData = async () => {
  try {
  
    await new Promise((resolve) => setTimeout(resolve, 300));
    return []; 
  } catch (error) {
    console.error("Failed to fetch mock data:", error);
    return null;
  }
};
