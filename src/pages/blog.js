import { Helmet } from "react-helmet-async";

// import { BlogView } from "./sections/blog/view";
import { BlogView } from "../sections/blog/view";

// ----------------------------------------------------------------------

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title> Outbox | Minimal UI </title>
      </Helmet>

      <BlogView />
    </>
  );
}
