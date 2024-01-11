type Props = {
  href: string;
  label: string;
};

export const ButtonLink = (props: Props) => {
  return (
    <a href={props.href}>
      <div className="w-full my-5 py-3 text-center font-semibold rounded-xl bg-mySageGreen/80 text-white hover:bg-mySageGreen">
        {props.label}
      </div>
    </a>
  );
};
