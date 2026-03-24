import { supabase } from "./supabase";

/**
 * Uploads a file to a specific Supabase bucket
 * @param bucket - The name of your bucket (e.g., 'teddy-photos')
 * @param file - The file object from an <input type="file">
 * @returns The public URL of the uploaded file
 */
export const uploadPhoto = async (bucket: string, file: File) => {
  try {
    // 1. Create a unique file path (e.g., "1710672000-myphoto.jpg")
    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random()}-${Date.now()}.${fileExt}`;
    const filePath = `${fileName}`;

    // 2. Upload the file to Supabase Storage
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(filePath, file);

    if (error) throw error;

    // 3. Get the public URL
    const { data: publicUrlData } = supabase.storage
      .from(bucket)
      .getPublicUrl(filePath);

    return {
      success: true,
      url: publicUrlData.publicUrl,
      path: data.path,
    };
  } catch (error) {
    console.error("Error uploading to Supabase:", error);
    return { success: false, error };
  }
};
