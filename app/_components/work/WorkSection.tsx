import Image from "next/image";

interface WorkSectionProps {
  company: string;
  role: string;
  type: string;
  image: any;
  imageAlt: string;
  link: string;
  imgSize?: number;
  imgRounded?: boolean;
  mobileImgWidth?: number;
  mobileImgHeight?: number;
  children?: React.ReactNode;
}

const WorkSection: React.FC<WorkSectionProps> = ({
  company,
  role,
  type,
  image,
  imageAlt,
  link,
  imgSize = 60,
  imgRounded = false,
  mobileImgWidth = 40,
  mobileImgHeight = 40,
  children,
}) => {
  return (
    <section className="mb-20">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-between items-center mb-10">
        <div className="col-span-2">
          <div className="mb-6 flex gap-4 items-center">
            <div className="flex sm:hidden justify-center items-center w-[60px] h-[60px] rounded-md backdrop-blur-xs p-2 bg-linear-to-r from-indigo-600/20 to-cyan-800/20 hover:bg-linear-to-l border border-cyan-300/10 hover:border-cyan-300/20 group transition duration-200">
              <a href={link} target="_blank" rel="noreferrer">
                <Image
                  src={image}
                  alt={imageAlt}
                  className={`${imgRounded ? 'rounded-full' : ''} group-hover:scale-105 transition duration-200`}
                  width={imgSize}
                  height={imgSize}
                />
              </a>
            </div>
            <div>
              <h2 className="text-cyan-50/70 text-sm">
                {role} · <span className="text-xs">{type}</span>
              </h2>
              <h3 className="text-2xl font-bold text-cyan-100">{company}</h3>
            </div>
          </div>
          {children}
        </div>
        <div className="hidden sm:flex justify-center items-center w-[200px] h-[200px] ml-auto rounded-md backdrop-blur-xs p-4 bg-linear-to-r from-indigo-600/20 to-cyan-800/20 hover:bg-linear-to-l border border-cyan-300/10 hover:border-cyan-300/20 group transition duration-200">
          <a href={link} target="_blank" rel="noreferrer">
            <Image
              src={image}
              alt={imageAlt}
              className={`${imgRounded ? 'rounded-full' : ''} group-hover:scale-105 transition duration-200`}
              width={mobileImgWidth}
              height={mobileImgHeight}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;