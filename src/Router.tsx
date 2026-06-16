import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { SearchResults } from "./Components/searchResult/SearchResults";
import { ItemModal } from "./Components/modal/ItemModal";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="modal/:mediaType/:itemId" element={<ItemModal />} />
      </Route>
      <Route path="search/:keyword" element={<SearchResults />}>
        <Route path="modal/:mediaType/:itemId" element={<ItemModal />} />
      </Route>
    </Routes>
  );
};
