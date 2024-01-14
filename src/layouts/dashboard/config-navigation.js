// import SvgColor from "./components/svg-color";
import SvgColor from "../../components/svg-color";

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

const navConfig = [
  // {
  //   title: 'dashboard',
  //   path: '/',
  //   icon: icon('ic_analytics'),
  // },
  {
    title: "Asset Read",
    path: "/assetread",
    icon: icon("ic_user"),
  },
  {
    title: "Asset Write",
    path: "/assetwrite",
    icon: icon("ic_cart"),
  },
  {
    title: "Outbox",
    path: "/outbox",
    icon: icon("ic_blog"),
  },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
