import AddNewProperty from "../../Page/PropertyPage/Admin/AddNewProperty";
import AllPropertyTable from "../../Page/PropertyPage/Admin/AllPropertyTable";

export const adminPropertyTabConfig = [
{
  key: 'all_existing_property',
  label: 'All Existing Property',
  children: <AllPropertyTable/>
},
{
  key: 'new_property',
  label: 'New Property',
  children: <AddNewProperty/>
}
]