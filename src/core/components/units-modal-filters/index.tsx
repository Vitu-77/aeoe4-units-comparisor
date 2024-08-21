import React, {
  FC,
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ListUnitsParams } from "@infra/api/requests/list-units";
import { listCivs } from "@infra/api";

type Props = {
  filters: ListUnitsParams;
  onChange: (p: ListUnitsParams) => void;
};

export const UnitsModalFilters: FC<Props> = ({ filters, onChange }) => {
  const civs = useMemo(() => listCivs(), []);
  const [formValue, setFormValue] = useState(filters);

  useEffect(() => {
    onChange(formValue);
  }, [formValue, onChange]);

  const onSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    console.log(new FormData(e as any).values);
  }, []);

  return (
    <form className="flex flex-col w-full gap-4 px-4" onSubmit={onSubmit}>
      <div className="flex w-full gap-2 pb-2 overflow-x-auto custom-scrollbar">
        {civs.map((c) => (
          <img
            className="w-[50px] cursor-pointer rounded-md"
            key={c.name}
            style={{ opacity: (!filters.civ || filters.civ === c.name) ? 1 : 0.2 }}
            src={c.flag}
            onClick={() =>
              setFormValue((prev) => ({
                ...prev,
                civ: formValue.civ === c.name ? null : c.name,
              }))
            }
          />
        ))}
      </div>

      {/* <input className="w-full rounded-md bg-foreground-500 text-foreground-300"  /> */}
    </form>
  );
};
