import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";
import DriveRxLogo from "../assets/DriveX-Logo-Horizontal.svg";
import KidsDriveRxBannerTop from "../assets/KidsDriveRxBannerTop.svg";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <div>
          <h1><KidsDriveRxBannerTop width={"50%"} /></h1>
          <h2><a href={"mailto:train@lorimarkham.com?subject=Kids%20program%20Inquiry"}>Contact Coach Lori</a></h2>
          <h2><a href="https://share.hsforms.com/1NVOBqESzR---i9q56RjpeQbyfra">Signup for the Kids Program</a></h2>
          <h2><DriveRxLogo width={"25%"} /></h2>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
          padding: 0 0rem;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
          text-align: center;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
          text-align: center;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}
