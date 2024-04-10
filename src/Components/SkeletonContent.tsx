import "./SkeletonContent.scss";

export default function SkeletonContent() {
  return (
    <div className="skeleton_content_wrapper">
      <a className="skeleton_content">
        <img className="skeleton_content_img" width={48} />
        <div className="skeleton_content_title" />
      </a>
    </div>
  );
}
