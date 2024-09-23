import Skeleton from "react-loading-skeleton";

export const renderLoading = () => {
  return (
    <div className="row g-3">
      <div className="col-md-3">
        <Skeleton height={350} />
      </div>
      <div className="col-md-3">
        <Skeleton height={350} />
      </div>
      <div className="col-md-3">
        <Skeleton height={350} />
      </div>
      <div className="col-md-3">
        <Skeleton height={350} />
      </div>
    </div>
  );
};

export const renderLoadingImage = () => {
  return (
    <div className="row">
      <Skeleton height={350} />
    </div>
  );
};