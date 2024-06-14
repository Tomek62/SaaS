import { ReactElement, ReactNode } from "react";

const IphoneMockup = ({children}:{children:ReactNode}) => {
  return (
    <div className="mockup-phone">
      <div className="camera"></div>
      <div className="display">
        <div className="artboard artboard-demo phone-1">{children}</div>
      </div>
    </div>
  );
};
export default IphoneMockup;