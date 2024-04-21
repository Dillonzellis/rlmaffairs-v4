import type { VendorProps } from "@/data/vendors";

export const VendorInfo = ({
  name,
  link,
  phone,
  additionalInfo,
  additionalLink,
}: VendorProps) => {
  return (
    <div>
      <div className="text-lg hover:underline">
        {link ? <a href={link}>{name}</a> : <span>{name}</span>}
      </div>
      <div>
        {phone ? (
          <div className="text-sm text-muted-foreground">
            <a href={`tel:+1${phone}`}>{phone}</a>
          </div>
        ) : null}
        {additionalInfo && additionalLink && (
          <span className="text-sm text-muted-foreground">
            <a href={additionalLink}>{additionalInfo}</a>
          </span>
        )}
      </div>
    </div>
  );
};
