/* eslint-disable react-hooks/exhaustive-deps */
import React, {memo, useEffect, useState } from 'react'
import { bindActionCreators  } from 'redux'
import { useTranslation } from "react-i18next"
import { Table, Tag, message, Modal } from 'antd';
import { useSelector, useDispatch} from 'react-redux'
import { AiFillEdit, AiTwotoneEyeInvisible } from "react-icons/ai";

import rolesActions from './rolesActions'
import { Pointer, WrapperActions } from '../../utilities/transversal.styles'

function Roles() {

  const {t} = useTranslation(['roles', 'common']);
  const dispapatch = useDispatch();

  const rolesState = useSelector((state)=> state.roles);

  const [loading, setLoading] = useState(false);
  const [showRolModal, setShowRolModal] = useState(false);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10, showSizeChanger: true });

  const { getRoles } = bindActionCreators(rolesActions, dispapatch);

  useEffect(()  => {
    setLoading(true);
    getRoles(pagination);
  }, []);

  useEffect(() => {
    if(rolesState.roles.length > 0 ){
      setLoading(false);
    }
  }, [rolesState.roles]);

  const showTotal = () => {
    return `${t("totalRecordsStart", { ns: "common" })} ${rolesState.total} ${t("totalRecordsEnd", { ns: "common" } )}`   ;
  }

  const confirm = () => {
    message.info('Clicked on Yes.');
  };

  const closeRoleModal = () => {
    setShowRolModal(false)
  }

  const columns = [
    { title: t("name"), dataIndex: 'name', key: 'name' },
    { title: t("modules"), 
      dataIndex: 'modules', 
      render: row => {
        const molules = row.map(o=> {return o.module})
        const cell = molules.length > 0  ? molules.map(p =>{  return <Tag color="green">{p.toUpperCase()}</Tag>; } ) : '';
        return <>{cell}</>
    }},
    { title: t("permissions"), 
      dataIndex: 'permissions', 
      render: row => {
        const permissions = row.map(o=> {return o.permission})
        const cell = permissions.length > 0  ? permissions.map(p =>{  return <Tag color="green">{p.toUpperCase()}</Tag>; } ) : '';
        return <>{cell}</>
    }},
    { title: t("actions"),
      render: () => (
        <WrapperActions>
          <Pointer onClick={() => setShowRolModal(true)} ><AiFillEdit size={20} title={t("edit")} /></Pointer>
          <Pointer onClick={confirm} ><AiTwotoneEyeInvisible size={20} title={t("suspend")} /></Pointer>
        </WrapperActions>
    )}
  ];

  return (
    <>
      <Table
      className="components-table-demo-nested"
      columns={columns}
      dataSource={rolesState.roles}
      onChange={(pagResponse) => setPagination(pagResponse)}
      loading={loading}
      pagination=  {
        {
          current: pagination.current,
          pageSize: pagination.pageSize,
          total: rolesState.total,
          showSizeChanger:true,
          defaultCurrent: 10,
          showTotal: showTotal
        }
      }
      />
      <Modal
          title={t("editRole")}
          centered
          visible={showRolModal}
          footer={null}
          onCancel={(e)=> closeRoleModal(e)}
          maskClosable={false}
          width={600}
        >
          <h1>Hi</h1>
      </Modal>
    </>
  )
}

export default memo(Roles)