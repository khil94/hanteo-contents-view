import "./SkeletonContent.scss";

export default function SkeletonContent() {
  return (
    <div className="skeleton_content_wrapper">
      <a className="skeleton_content">
        <div className="skeleton_content_img" />
        <div className="skeleton_content_title" />
      </a>
    </div>
  );
}
