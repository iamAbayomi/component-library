import React from "react";
import Avatar from "./components/Avatar";
import AvatarandName from "./components/AvatarAndName";
import Badge from "./components/Badge/Badge";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Checkbox from "./components/Checkbox/Checkbox";
import Chips from "./components/Chips/Chips";
import DropDown from "./components/Dropdown/DropDown";
import InputField from "./components/InputField/InputField";
import Modal from "./components/Modal/Modal";
import OverviewCard from "./components/OverviewCard/OverviewCard";
import Table from "./components/Table/Table";
import Typography from "./components/Typograpghy/Typography";

function App(){
    return(
        <div>
            <Avatar imageSrc={"https://avatars2.githubusercontent.com/u/132554"} />
            <AvatarandName name={'James Brown'} imageSrc={'https://avatars2.githubusercontent.com/u/132554'} />
            <Badge text="Successfu;"/>
            <Button width={'132px'} height={'42px'} color={'blue'} margin={'20px 0px'} backgroundColor={'white'} buttonText={'Secondary'} />
            <Card />
            <Checkbox  />
            <DropDown menuTitle={"work"} menuItem={['place', 'house']} />
            <InputField type={"Name"} placeholder={"Name"} />
            <Modal children={<p>Hello</p>} />
            <OverviewCard percentageText={"Testing"} percentage={0} />
            <Table tableColums={["Name","Role"]} tableData={[["John", "Admin"]]} />
            <Typography fontSize={"42px"} text={"x-Large"} fontWeight={"500"} lineHeight={"44px"} />
            
        </div>
    )
} 

export default App