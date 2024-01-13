type Props = {
  href: string;
  label: string;
};

export const ButtonLink = (props: Props) => {
  return (
    <a href={props.href}>
      <div className="w-full my-5 py-3 text-center font-semibold rounded-xl text-white border-2 border-white hover:border-yellow-100 duration-200 hover:tracking-wider	">
        {props.label}
      </div>
    </a>
  );
};
