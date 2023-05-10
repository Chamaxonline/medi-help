import AdminLayout from "./adminlayout";
import MainLayout from "./mainlayout";

export const Layouts = {
    Main : MainLayout,
    Admin:AdminLayout
}

export type LayoutKeys = keyof typeof Layouts; // "Main" | "Admin"