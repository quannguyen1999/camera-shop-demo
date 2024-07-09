import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

interface BreadcrumbItem {
  value: string;
  url: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}
export const BreadCrumbs = ({ items }: BreadcrumbProps) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((value) => (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink href={value.url}>{value.value}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
