package data.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import data.dto.CityDto;
import data.dto.LikeDto;
import data.dto.ReviewDto;
import data.dto.TripDto;
import data.mapper.CityInfoMapper;

@Service
public class CityInfoService implements CityInfoServiceInter {
	
	@Autowired
	private CityInfoMapper cimapper;
	
	@Override
	public CityDto getData(int num) {
		// TODO Auto-generated method stub
		return cimapper.getData(num);
	}
	
	// city랑 trip이랑 join 써본거
//	@Override
//	public List<CityDto> getData(int num) {
//		// TODO Auto-generated method stub
//		return cimapper.getData(num);
//	}
	
//	@Override
//	public void getName(String name) {
//		// TODO Auto-generated method stub
//		cimapper.getName(name);
//	}
	
	@Override
	public List<TripDto> getTripData(int member_num, int city_num) {
		// TODO Auto-generated method stub
		return cimapper.getTripData(member_num, city_num);
	}
	
	@Override
	public int getLike(String place_id,int loginNum) {
		// TODO Auto-generated method stub
		Map<String, String> map = new HashMap<>();
		map.put("place_id", place_id);
		map.put("loginNum", Integer.toString(loginNum));
		return cimapper.getLike(map);
	}
	
	@Override
	public int insertLike(int place_id,int LoginNum) {
		// TODO Auto-generated method stub
	    Map<String, Integer> map = new HashMap<>();
	    map.put("place_id", place_id);
	    map.put("member_num",LoginNum);
	    return cimapper.insertLike(map);
	}
	   
	@Override
	public void deleteLike(String place_id, int loginNum) {
		// TODO Auto-generated method stub
		Map<String, String> map = new HashMap<>();
		map.put("place_id", place_id);
		map.put("loginNum", Integer.toString(loginNum));
		cimapper.deleteLike(map);
	}
	
	
	// like table의 place_id, member_num 가져오기
	@Override
	public List<Integer> getLikeTable(int loginNum) {
		// TODO Auto-generated method stub
		return cimapper.getLikeTable(loginNum);
	}
	
	// 현지씌 작품 돈터치!!!
	@Override
	public List<CityDto> getCityList() {
		return cimapper.getCityList();
	}
}
