import { useFormatMessage } from "@comparaonline/react-intl-hooks";
import { useMemo } from "react";

const experienceMarks = {
  1: "1",
  3: "3",
  5: "5",
  7: "7",
  9: "9+"
};

export const useExperienceMarks = () => {
  const i18n = useFormatMessage();
  const mappedExperienceMarks = useMemo(() => {
    return Object.entries(experienceMarks).reduce((acc: any, cur: any) => {
      acc[cur[0]] = i18n(`years.${cur[1]}`);
      return acc;
    }, {});
  }, [experienceMarks]);
  return mappedExperienceMarks;
};

const typeOfEmployment = [
  { value: "on_side" },
  { value: "remote" },
  { value: "freelance" },
  { value: "relocate_to_another_city" },
  { value: "relocate_to_other_country" }
];

export const useTypeOfEmployment = () => {
  const i18n = useFormatMessage();
  const mappedTypeOfEmployment = useMemo(() => {
    return typeOfEmployment.map((item: any) => {
      item['label'] = i18n(`typeOfEmployment.${item['value']}`);
      return item;
    });
  }, [experienceMarks]);
  return mappedTypeOfEmployment;
};

export default {
  useExperienceMarks,
};
