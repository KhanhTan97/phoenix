import { avatars } from "@/lib/appwrite";

const Avatar = ({ name }: { name?: string }) => {
  return (
    <figure className="avatar">
      <img src={avatars.getInitials(name, 48, 48)} width={48} alt={name} />
    </figure>
  );
};

export default Avatar;
