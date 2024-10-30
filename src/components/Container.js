export default function Container({classname, children}){
    return (
        <div className={`max-w-[1600px] mx-auto px-16 md:px-20 lg:px-24 ${classname}`}>
            {children}
        </div>
    );
}