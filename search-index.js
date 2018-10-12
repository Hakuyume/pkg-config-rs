var N = null;var searchIndex = {};
searchIndex["pkg_config"]={"doc":"A build dependency for Cargo libraries to find system artifacts through the `pkg-config` utility.","items":[[3,"Config","pkg_config","",N,N],[3,"Library","","",N,N],[12,"libs","","",0,N],[12,"link_paths","","",0,N],[12,"frameworks","","",0,N],[12,"framework_paths","","",0,N],[12,"include_paths","","",0,N],[12,"defines","","",0,N],[12,"version","","",0,N],[4,"Error","","Represents all reasons `pkg-config` might not succeed or be run at all.",N,N],[13,"EnvNoPkgConfig","","Aborted because of `*_NO_PKG_CONFIG` environment variable.",1,N],[13,"CrossCompilation","","Cross compilation detected.",1,N],[13,"Command","","Failed to run `pkg-config`.",1,N],[12,"command","pkg_config::Error","",1,N],[12,"cause","","",1,N],[13,"Failure","pkg_config","`pkg-config` did not exit sucessfully.",1,N],[12,"command","pkg_config::Error","",1,N],[12,"output","","",1,N],[5,"target_supported","pkg_config","",N,[[],["bool"]]],[5,"probe_library","","Simple shortcut for using all default options for finding a library.",N,[[["str"]],["result",["library","error"]]]],[5,"get_variable","","Run `pkg-config` to get the value of a variable from a package using --variable.",N,[[["str"],["str"]],["result",["string","error"]]]],[11,"new","","Creates a new set of configuration options which are all initially set to \"blank\".",2,[[],["config"]]],[11,"statik","","Indicate whether the `--static` flag should be passed.",2,[[["self"],["bool"]],["config"]]],[11,"atleast_version","","Indicate that the library must be at least version `vers`.",2,[[["self"],["str"]],["config"]]],[11,"arg","","Add an argument to pass to pkg-config.",2,[[["self"],["s"]],["config"]]],[11,"cargo_metadata","","Define whether metadata should be emitted for cargo allowing it to automatically link the binary. Defaults to `true`.",2,[[["self"],["bool"]],["config"]]],[11,"env_metadata","","Define whether metadata should be emitted for cargo allowing to automatically rebuild when environment variables change. Defaults to `false`.",2,[[["self"],["bool"]],["config"]]],[11,"print_system_libs","","Enable or disable the `PKG_CONFIG_ALLOW_SYSTEM_LIBS` environment variable.",2,[[["self"],["bool"]],["config"]]],[11,"probe","","Run `pkg-config` to find the library `name`.",2,[[["self"],["str"]],["result",["library","error"]]]],[11,"from","","",2,[[["t"]],["t"]]],[11,"into","","",2,[[["self"]],["u"]]],[11,"to_owned","","",2,[[["self"]],["t"]]],[11,"clone_into","","",2,N],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"get_type_id","","",2,[[["self"]],["typeid"]]],[11,"try_into","","",2,[[["self"]],["result"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"from","","",0,[[["t"]],["t"]]],[11,"into","","",0,[[["self"]],["u"]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"get_type_id","","",0,[[["self"]],["typeid"]]],[11,"try_into","","",0,[[["self"]],["result"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"from","","",1,[[["t"]],["t"]]],[11,"into","","",1,[[["self"]],["u"]]],[11,"to_string","","",1,[[["self"]],["string"]]],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"get_type_id","","",1,[[["self"]],["typeid"]]],[11,"try_into","","",1,[[["self"]],["result"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"clone","","",2,[[["self"]],["config"]]],[11,"default","","",2,[[],["config"]]],[11,"fmt","","",1,[[["self"],["formatter"]],["result",["error"]]]],[11,"fmt","","",0,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",1,[[["self"],["formatter"]],["result",["error"]]]],[11,"description","","",1,[[["self"]],["str"]]],[11,"cause","","",1,[[["self"]],["option",["error"]]]]],"paths":[[3,"Library"],[4,"Error"],[3,"Config"]]};
initSearch(searchIndex);
