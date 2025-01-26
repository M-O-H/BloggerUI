import dynamic from "next/dynamic";
import "@uiw/react-md-editor/markdown-editor.css";

const MDEditor = dynamic(
	() => import("@uiw/react-md-editor"),
	{ ssr: false }
);

export default function BlogEditor({
	value,
	onChange,
}: {
	value: string;
	onChange: (value?: string) => void;
}) {
	return <MDEditor value={value} onChange={onChange} />;
}
