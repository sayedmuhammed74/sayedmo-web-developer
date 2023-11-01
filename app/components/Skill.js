const Skill = ({ skill }) => {
  return (
    <>
      <div className="col-span-2 md:col-span-1 w-full">
        <h3 className="mb-2">{skill.name}</h3>
        <div className="bg-dark h-5 rounded-md overflow-hidden flex items-center">
          <div
            className={`w-[${String(
              skill.percentage
            )}%] h-full px-2 font-light text-sm bg-primary`}
          >
            {skill.percentage}%
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
