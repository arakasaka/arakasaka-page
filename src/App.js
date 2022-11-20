import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PrivacyPolicy from './PrivacyPolicy';
import PrivacyPolicyJp from './PrivacyPolicyJp';

const router = createBrowserRouter([
  {
    path: "/arakasaka-page",
    element: <Root />,
  },
  {
    path: "/arakasaka-page/arakasaka",
    element: <PageContainer><PrivacyPolicy appName="AR AKASAKA" /></PageContainer>,
  },
  {
    path: "/arakasaka-page/arsocial",
    element: <PageContainer><PrivacyPolicy appName="AR Social Media" /></PageContainer>,
  },
  {
    path: "/arakasaka-page/arspot",
    element: <PageContainer><PrivacyPolicy appName="AR Spot" /></PageContainer>,
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}

function Root() {
  return (
    <PageContainer>
      <h1 style={{marginBottom: 0}}>AR</h1>
      <h1 style={{marginTop: 0}}>AKASAKA</h1>
      <PrivacyPolicy appName={"AR AKASAKA, AR Social Media and AR Spot"} />
      <PrivacyPolicyJp />
    </PageContainer>
  );
}

function PageContainer(props) {
  return (
    <div style={{maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto', color: 'black'}}>
      <div style={{textAlign: 'left', paddingLeft: 40, paddingRight: 40}}>
        {props.children}
      </div>
    </div>
  )
}